class HomeController {
  message: string;
  complex: string[];
  constructor() {
    this.message = "a lot to do here...";
    this.complex = ["a", "complex", "object"];
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

angular.module("app").controller("HomeController", HomeController);

export {};
