import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleElement"]

  connect() {
    console.log(this.toggleElement);
  }

  fire() {
    this.toggleElement.classList.toggle("d-none");
  }
}
