class Form {

  constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }

  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}

display(){
    this.title.html("TANKER GAME");
        this.title.position(width/2-50, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(width/2-150,height/2);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(width/2-50,height/2+100);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightgreen');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/2-100,250);
            this.greeting.style('color', 'lightblue');
            this.greeting.style('font-size', '100px');
        });
}

}