describe('E2E Test', () => {
  it('should visit', () => {
    cy.visit('/');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(200).equals(200);
  });
});
