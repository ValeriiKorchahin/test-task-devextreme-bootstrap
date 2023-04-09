import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit
{

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
      localStorage.setItem(`is${$event.target.value}Checked`, $event.target.checked)
        this.params.push($event.target.value)
        localStorage.setItem('SEARCH_PARAMS', JSON.stringify(this.params))
        this.searchOption.emit(this.params)
    }
    else {
      localStorage.setItem(`is${$event.target.value}Checked`, $event.target.checked)
      const savedParams = JSON.parse(localStorage.getItem('SEARCH_PARAMS') as string);
      const newParams = savedParams.filter((opt: string) => opt !== $event.target.value)
      localStorage.setItem('SEARCH_PARAMS', JSON.stringify(newParams))
      this.searchOption.emit(newParams)
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

}
