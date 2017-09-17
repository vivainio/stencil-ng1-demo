import { Component, Prop, EventEmitter, Event } from "@stencil/core";


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() simplestring: string;

  @Prop() strings: string[];

  @Event() onListClick: EventEmitter;
  listClick(e) {
    console.log('list item clicked in stencil');
    this.onListClick.emit(e);
  }
  render() {
    return (
      <div>
        <p>Simple string is {this.simplestring}</p>
        { this.strings ? (
          <ul>
          { this.strings.map(s => <li onClick={ e => this.listClick(e) }>
          {s}
          </li>) }
        </ul>) : <p onClick={_ => this.listClick(null) }>No strings yet</p>}
        <slot></slot>
      </div>
    );
  }
}
