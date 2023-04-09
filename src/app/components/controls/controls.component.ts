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
    isSelected: true,
    value: 'gender'
  };

  location = {
    isSelected: true,
    value: 'location'
  };

  email = {
    isSelected: true,
    value: 'email'
  };

  phone = {
    isSelected: true,
    value: 'phone'
  };

  onControlChange($event: any) {
    if (!$event.target.checked) {
      this.setCheckboxStatus($event.target.value, $event.target.checked)
      this.addParameter($event.target.value);
      this.setNewParams();
      this.searchOption.emit(this.params);
    } else {
      this.setCheckboxStatus($event.target.value, $event.target.checked)
      this.removeParameter($event.target.value);
      this.setNewParams();
      this.searchOption.emit(this.params);
    }
  }


  ngOnInit(): void {
    const isGenderChecked = JSON.parse(localStorage.getItem('isgenderChecked') as string);
    const isLocationChecked = JSON.parse(localStorage.getItem('islocationChecked') as string);
    const isEmailChecked = JSON.parse(localStorage.getItem('isemailChecked') as string);
    const isPhoneChecked = JSON.parse(localStorage.getItem('isphoneChecked') as string);

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

  private setNewParams() {
    localStorage.setItem('SEARCH_PARAMS', JSON.stringify(this.params));
  }

  private removeParameter(parameter: string) {
    const parameters = JSON.parse(localStorage.getItem('SEARCH_PARAMS') as string);
    this.params = parameters.filter((opt: string) => opt !== parameter);
  }

  private addParameter(parameter: string) {
    this.params.push(parameter);
  }

  setCheckboxStatus(parameter: string, isChecked: string) {
    localStorage.setItem(`is${parameter}Checked`, isChecked);
  }

}
