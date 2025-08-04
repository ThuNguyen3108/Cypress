/*
<select id="dropdown">
  <option value="" disabled="disabled" selected="selected">Please select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
*/

const DROPDOWN_SEL = "select[id='dropdown']";

describe('Dropdown handling', () => {
  it('should be able to select dropdown options', () => {
    // Visit the page
    cy.visit('/dropdown');

    // Select by index | Select Option 1
    cy.get(DROPDOWN_SEL).select('1'); // or use .select('Option 1')

    // Select by value | Select Option 2
    cy.get(DROPDOWN_SEL).select("2");

    // Select by visible test | Slect Option 1
    cy.get(DROPDOWN_SEL).select("Option 1")

    // Verify the selected option is now Option 1
    cy.get("select option:selected").invoke("text").should("eq", "Option 1");

  });
});
