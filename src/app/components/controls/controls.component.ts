import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Output() searchOption = new EventEmitter<string[]>;

  params: string[] = [];

  gender = {
    isSelected: true
  };

  location = {
    isSelected: true
  };

  email = {
    isSelected: true
  };

  phone = {
    isSelected: true
  };

  onControlChange($event: any) {
    if (!$event.target.checked) {
      this.addParameter($event.target.value, $event.target.checked);
      this.searchOption.emit(this.params);
    } else {
      this.removeParameter($event.target.value);
      this.searchOption.emit(this.params);
    }
  }


  ngOnInit(): void {
    const isGenderChecked = ControlsComponent.getItem('gender');
    const isLocationChecked = ControlsComponent.getItem('location');
    const isEmailChecked = ControlsComponent.getItem('email');
    const isPhoneChecked = ControlsComponent.getItem('phone');

    if (isGenderChecked !== null) {
      this.gender.isSelected = isGenderChecked;
    }
    if (isLocationChecked !== null) {
      this.location.isSelected = isLocationChecked;
    }
    if (isEmailChecked !== null) {
      this.email.isSelected = isEmailChecked;
    }
    if (isPhoneChecked !== null) {
      this.phone.isSelected = isPhoneChecked;
    }
  }

  public static setNewItem(key: string, value: string | string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  public static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public static clearStorage() {
    localStorage.clear();
  }

  private removeParameter(parameter: string) {
    ControlsComponent.removeItem(parameter);
    const parameters = ControlsComponent.getItem('SEARCH_PARAMS');
    this.params = parameters.filter((opt: string) => opt !== parameter);
    ControlsComponent.setNewItem('SEARCH_PARAMS', this.params);
  }

  private addParameter(parameter: string, status: string) {
    ControlsComponent.setNewItem(parameter, status);
    this.params.push(parameter);
    ControlsComponent.setNewItem('SEARCH_PARAMS', this.params);
  }
}
