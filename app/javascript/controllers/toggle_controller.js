import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleElement"]

  connect() {
  }

  fire() {
    this.toggleElementTarget.classList.toggle("d-none");
  }
}
