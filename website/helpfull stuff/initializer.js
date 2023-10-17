function wrapElementWithLink(targetElementId, hrefValue) {
    // Find the target element by its ID
    const targetElement = document.getElementById(targetElementId);
  
    if (targetElement) {
      // Create a new 'a' element
      const anchorElement = document.createElement("a");
  
      // Set the 'href' attribute of the 'a' element
      anchorElement.setAttribute("href", hrefValue);
  
      // Wrap the target element with the 'a' element
      targetElement.parentNode.insertBefore(anchorElement, targetElement);
      anchorElement.appendChild(targetElement);
    }
  }
  
  function wrapElementWithForm(targetElementId, action, method) {
    // Find the target element by its ID
    const targetElement = document.getElementById(targetElementId);
  
    if (targetElement) {
      // Create a new 'form' element
      const formElement = document.createElement("form");
  
      // Set the 'action' and 'method' attributes of the 'form' element
      formElement.setAttribute("action", action);
      formElement.setAttribute("method", method);
  
      // Wrap the target element with the 'form' element
      targetElement.parentNode.insertBefore(formElement, targetElement);
      formElement.appendChild(targetElement);
    }
  }
  
  function addNameAttributeToElement(targetElementId, nameValue) {
    // Find the target element by its ID
    const targetElement = document.getElementById(targetElementId);
  
    if (targetElement) {
      // Add the 'name' attribute to the target element
      targetElement.setAttribute("name", nameValue);
    }
  }
  
  function addTypeAttributeToElement(targetElementId, typeValue) {
    // Find the target element by its ID
    const targetElement = document.getElementById(targetElementId);
  
    if (targetElement) {
      // Add the 'name' attribute to the target element
      targetElement.setAttribute("type", typeValue);
    }
  }
  
  function insertElementAfter(referenceId, htmlContent) {
    const referenceElement = document.getElementById(referenceId);
  
    if (referenceElement) {
      const newElement = document
        .createRange()
        .createContextualFragment(htmlContent);
      referenceElement.parentNode.insertBefore(
        newElement,
        referenceElement.nextSibling
      );
    }
  }
  
  function applyStylesToDateBorder() {
    const dateBorderElement = document.querySelector('.date-border');
  
    if (dateBorderElement) {
      const styles = {
        transform: 'translateX(0.0px) translateY(0.0px) translateZ(-1.0px)',
        display: 'flex',
        borderTopColor: '#000000ff',
        borderRightColor: '#000000ff',
        borderBottomColor: '#000000ff',
        borderLeftColor: '#000000ff',
        borderRightWidth: '2.0px',
        borderLeftWidth: '2.0px',
        borderTopWidth: '2.0px',
        borderBottomWidth: '2.0px',
        borderTopRightRadius: '8.0px',
        borderTopLeftRadius: '8.0px',
        borderBottomRightRadius: '8.0px',
        borderBottomLeftRadius: '8.0px',
        height: 'calc(100% + 0.0px)',
        width: 'calc(100% + 0.0px)',
        inset: '0.0px 0.0px',
        borderRightStyle: 'solid',
        borderLeftStyle: 'solid',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        backgroundColor: 'transparent',
        position: 'fixed',
        pointerEvents: 'none',
      };
  
      for (const style in styles) {
        dateBorderElement.style[style] = styles[style];
      }
    }
  }
  
  function addAsteriskToPatternAttributes() {
    // Find all elements with a 'pattern' attribute
    const elementsWithPatternAttribute = document.querySelectorAll('[pattern]');
  
    // Iterate through the elements and add a '*' to their pattern attributes
    elementsWithPatternAttribute.forEach((element) => {
      const currentPattern = element.getAttribute('pattern');
      if (currentPattern && !currentPattern.endsWith('*')) {
        element.setAttribute('pattern', `${currentPattern}*`);
      }
    });
  }
  
  // Function to call when the document is loaded
  function onDocumentLoaded() {
    console.log("initilaizer impoerted");
    wrapElementWithLink("label21-region", "#vorhauptcandy");
    wrapElementWithLink("label28-region", "#aboutus");
    wrapElementWithLink("label29-region", "#angebot_box");
    wrapElementWithLink("label38-regionn", "#kontaktform");
  
    wrapElementWithForm("kontaktform", "https://formspree.io/f/mknlqyyb", "POST");
  
    addNameAttributeToElement("textfield5-region", "name");
    addNameAttributeToElement("textfield6-region", "event typ");
    addNameAttributeToElement("textfield7-region", "anzahl Personen");
    addNameAttributeToElement("textfield8-region", "adresse");
  
    addNameAttributeToElement("button1-region", "submit");
  
    // Add the provided HTML content after the element with ID 'textfield9'
    const htmlContentToAdd = `
      <div class="textfield9" id="textfield9">
          <div role="textbox" class="date-border" id="textfield9-border"></div>
          <input required="" name="datum" type="date" class="textfield9-region" id="datePicker-region" />
      </div>
    `;
    insertElementAfter("label35", htmlContentToAdd);
    
    applyStylesToDateBorder();

    addAsteriskToPatternAttributes();
  }
  
  // Add an event listener to execute the function when the document is loaded
  document.addEventListener("DOMContentLoaded", onDocumentLoaded);
  