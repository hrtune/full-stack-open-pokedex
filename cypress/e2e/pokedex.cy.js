describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001') // port number of 5000 is already used by my mac os
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})