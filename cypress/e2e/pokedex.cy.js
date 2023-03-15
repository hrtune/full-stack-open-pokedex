const homeUrl = 'http://localhost:5001' // port number of 5000 is already used by my mac os
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit(homeUrl)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur page can be opened', () => {
    cy.visit(homeUrl)
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})