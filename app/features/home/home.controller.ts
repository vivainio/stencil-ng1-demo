class HomeController {
  message: string;
  complex: string[];
  static $inject = ['$element'];
  constructor(private $element: ng.IAugmentedJQuery) {
    this.message = "a lot to do here...";
    this.complex = ["a", "complex", "object"];
  }

  $postLink() {
    // this is the place to hook up event listeners for stencil (dom) events
    this.$element.on('onListClick', ev => {
        console.log('Event cauch in angular', ev);
    });
  }
  changeMessage() {
    this.message = this.message + ".";
    console.log("click");
  }

  modifyComplex() {
    this.complex = this.complex.concat("newline");
    const el = document.querySelector("#mycomplex") as any;
    el.strings = this.complex;
  }
}

angular.module("app").component("exampleComponent", {
  controller: HomeController,
  templateUrl: "features/home/home.html"
});

export {};
