import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linna-dashboard';

  indexInicial: number = -1

  vote(index){
    this.indexInicial === -1? this.indexInicial = index : this.indexInicial = -1  
  }

  voteUnvote(index){
    if (this.indexInicial === index){
      return 'Unvote'
    } else {
      return 'Vote'
    }
  }

  escolhido(index){
    return this.indexInicial === index
  }

  outroEscolhido(){
    return this.indexInicial !== -1
  }
}
