import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleElement"]

  connect() {
    console.log(this.toggleElementTarget);
  }

  fire() {
    this.toggleElementTarget.classList.toggle("d-none");
  }
}
