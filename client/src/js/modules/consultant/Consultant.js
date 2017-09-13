/**
 * Created by se90514 on 2017-07-13.
 */

import { computed, observable, action } from "mobx";

class Consultant {
  // create a new Consultant for each when response fetching i service

  @observable firstName;
  @observable lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  @action
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  @action
  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const consultantState = new Consultant("kristina", "wiklund");
export default consultantState;
