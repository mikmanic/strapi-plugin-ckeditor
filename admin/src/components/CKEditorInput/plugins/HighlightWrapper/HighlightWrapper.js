const Plugin = window.CKEditor5.core.Plugin;
const ButtonView = window.CKEditor5.ui.ButtonView;

const highlightIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-440h360v-80H240v80Zm0-120h360v-80H240v80Zm-80 400q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>`;
const highlightStarsIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;

export default class HighlightWrapper extends Plugin {
  init() {
    const editor = this.editor;

    // Define the schema for 'highlightDiv'
    editor.model.schema.register('highlightDiv', {
      isBlock: true,
      allowIn: '$root',
    });
    editor.model.schema.extend('$block', { allowIn: 'highlightDiv' });

    // Define the schema for 'highlightStarsDiv'
    editor.model.schema.register('highlightStarsDiv', {
      isBlock: true,
      allowIn: '$root',
    });
    editor.model.schema.extend('$block', { allowIn: 'highlightStarsDiv' });

    // Downcast converter for 'highlightDiv'
    editor.conversion.for('downcast').elementToElement({
      model: 'highlightDiv',
      view: (modelElement, { writer: viewWriter }) => {
        return viewWriter.createContainerElement('div', { class: 'highlight' });
      },
    });

    // Upcast converter for 'highlightDiv'
    editor.conversion.for('upcast').elementToElement({
      view: {
        name: 'div',
        classes: 'highlight',
      },
      model: 'highlightDiv',
    });

    // Downcast converter for 'highlightStarsDiv'
    editor.conversion.for('downcast').elementToElement({
      model: 'highlightStarsDiv',
      view: (modelElement, { writer: viewWriter }) => {
        return viewWriter.createContainerElement('div', { class: 'highlight-stars' });
      },
    });

    // Upcast converter for 'highlightStarsDiv'
    editor.conversion.for('upcast').elementToElement({
      view: {
        name: 'div',
        classes: 'highlight-stars',
      },
      model: 'highlightStarsDiv',
    });

    // Add the first button to the toolbar
    editor.ui.componentFactory.add('highlightWrapper', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Highlight',
        tooltip: true,
        icon: highlightIcon,
      });

      // Button click listener
      view.on('execute', () => {
        this.wrapSelectionWithElement('highlightDiv');
      });

      return view;
    });

    // Add the second button to the toolbar
    editor.ui.componentFactory.add('highlightStarsWrapper', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Highlight Stars',
        tooltip: true,
        icon: highlightStarsIcon
      });

      // Button click listener
      view.on('execute', () => {
        this.wrapSelectionWithElement('highlightStarsDiv');
      });

      return view;
    });
  }

  wrapSelectionWithElement(elementName) {
    const editor = this.editor;
    const model = editor.model;
    const selection = model.document.selection;

    model.change((writer) => {
      // Get selected blocks
      const blocks = Array.from(selection.getSelectedBlocks());

      if (blocks.length) {
        // Check if all blocks are already wrapped with the element
        const isAlreadyWrapped = blocks.every((block) =>
          !!block.findAncestor(elementName)
        );

        if (!isAlreadyWrapped) {
          // Wrap with the specified element
          const range = writer.createRange(
            writer.createPositionBefore(blocks[0]),
            writer.createPositionAfter(blocks[blocks.length - 1])
          );
          const wrapperElement = writer.createElement(elementName);
          writer.wrap(range, wrapperElement);
        } else {
          // Unwrap logic
          const wrapperElements = new Set();

          // Collect all wrapper elements that are ancestors of the selected blocks
          for (const block of blocks) {
            const wrapperElement = block.findAncestor(elementName);
            if (wrapperElement) {
              wrapperElements.add(wrapperElement);
            }
          }

          // For each wrapper element, move its children up one level and remove the wrapper
          for (const wrapperElement of wrapperElements) {
            const parent = wrapperElement.parent;
            const index = wrapperElement.index;

            // Move all children of the wrapper element to its parent
            for (const child of Array.from(wrapperElement.getChildren())) {
              writer.move(writer.createRangeOn(child), writer.createPositionAt(parent, index));
            }

            // Remove the empty wrapper element
            writer.remove(wrapperElement);
          }
        }
      }
    });
  }
}
