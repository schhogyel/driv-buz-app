describe('The landing page', function() {
  it('Opens the page', function() {
    cy.visit('/');
  });

  it('displays correct title and links to the home page', function() {
    cy.get('[data-cy="appTitle"]').contains('Driver App');
    cy.get('[data-cy="appTitle"]').click();
    cy.location().should(loc => {
      expect(loc.host).to.eq('localhost:3000');
    });
  });

  it('has drivers and vehicles tab and driver tab is selected by default', function() {
    cy.get('#simple-tab-0 > span.MuiTab-wrapper').contains('Drivers');
    cy.get('#simple-tab-0').should('has.class', 'Mui-selected');

    cy.get('#simple-tab-1 > span.MuiTab-wrapper').contains('Vehicles');
  });

  it('driver tab displays all cards for driver', function() {
    cy.get('[data-cy="driverCard"]').should('have.length', '3');
  });

  it('vehicle tab should display all vehicles', function() {
    cy.get('#simple-tab-1').click();
    cy.get('[data-cy="vehicleCard"]').should('have.length', '3');
  });

  it('the driver name on driver card links to the card with driver information', function() {
    cy.visit('/');
    cy.get('[data-cy="driverName"]')
      .eq(0)
      .click();
    cy.get('[data-cy="driverCard"]').should('have.length', 1);
    cy.get('[data-cy="driverName"]').contains('Ellen Ripley');
  });

  it('the vehicle name on driver card links to the card with vehicle information', function() {
    cy.visit('/');
    cy.get('[data-cy="vehicleName"]')
      .eq(0)
      .click();
    cy.get('[data-cy="vehicleCard"]').should('have.length', 1);
    cy.get('[data-cy="vehicleName"]').contains('Nostromo');
  });
});
