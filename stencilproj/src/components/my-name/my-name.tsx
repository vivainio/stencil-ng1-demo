import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() simplestring: string;

  @Prop() strings: string[];

  render() {
    return (
      <div>
        <p>Simple string is {this.simplestring}</p>
        { this.strings ? (
          <ul>
          { this.strings.map(s => <li>{s}</li>) }
        </ul>) : <p>No strings yet</p>}
        <slot></slot>
      </div>
    );
  }
}
