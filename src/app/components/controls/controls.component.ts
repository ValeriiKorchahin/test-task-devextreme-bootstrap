import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Output() OnOptionSelect = new EventEmitter<string[]>();

  selectedOptions: string[] = [];

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

  onGenderControlChange() {
    if (!this.gender.isSelected) {
      localStorage.setItem('genderOption', String(this.gender.isSelected))
      localStorage.setItem('genderOptionVal', this.gender.value)
      this.selectedOptions.push(this.gender.value)
      this.OnOptionSelect.emit(this.selectedOptions)
    } else {
      localStorage.removeItem('genderOption')
      localStorage.removeItem('genderOptionVal')
      this.selectedOptions = this.selectedOptions.filter(option => option !== this.gender.value)
      this.OnOptionSelect.emit(this.selectedOptions)
    }
  }

  onLocationControlChange() {
    if (!this.location.isSelected) {
      localStorage.setItem('locationOptionVal', this.location.value)
      localStorage.setItem('locationOption', String(this.location.isSelected))
      this.selectedOptions.push(this.location.value);
      this.OnOptionSelect.emit(this.selectedOptions)
    } else {
      localStorage.removeItem('locationOption')
      localStorage.removeItem('locationOptionVal')
      this.selectedOptions = this.selectedOptions.filter(option => option !== this.location.value)
      this.OnOptionSelect.emit(this.selectedOptions)
    }
  }

  onEmailControlChange() {
    if (!this.email.isSelected) {
      localStorage.setItem('emailOptionVal', this.email.value)
      localStorage.setItem('emailOption', String(this.email.isSelected))
      this.selectedOptions.push(this.email.value);
      this.OnOptionSelect.emit(this.selectedOptions)
    } else {
      localStorage.removeItem('emailOption')
      localStorage.removeItem('emailOptionVal')
      this.selectedOptions = this.selectedOptions.filter(option => option !== this.email.value)
      this.OnOptionSelect.emit(this.selectedOptions)
    }
  }

  onPhoneControlChange() {
    if (!this.phone.isSelected) {
      localStorage.setItem('phoneOptionVal', this.phone.value)
      localStorage.setItem('phoneOption', String(this.phone.isSelected))
      this.selectedOptions.push(this.phone.value);
      this.OnOptionSelect.emit(this.selectedOptions)
    } else {
      localStorage.removeItem('phoneOption')
      localStorage.removeItem('phoneOptionVal')
      this.selectedOptions = this.selectedOptions.filter(option => option !== this.phone.value)
      this.OnOptionSelect.emit(this.selectedOptions)
    }
  }

  ngOnInit(): void {
    const isGenderSelected = localStorage.getItem('genderOption');
    const isLocationSelected = localStorage.getItem('locationOption');
    const isEmailSelected = localStorage.getItem('emailOption');
    const isPhoneSelected = localStorage.getItem('phoneOption')

    if (isGenderSelected) {
      this.gender.isSelected = JSON.parse(isGenderSelected)
    }

    if (isLocationSelected) {
      this.location.isSelected = JSON.parse(isLocationSelected)
    }

    if (isEmailSelected) {
      this.email.isSelected = JSON.parse(isEmailSelected)
    }

    if (isPhoneSelected) {
      this.phone.isSelected = JSON.parse(isPhoneSelected)
    }
  }

}
