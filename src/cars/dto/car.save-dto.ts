import { Length, Matches, Validate } from 'class-validator';
import { CarYearValidator } from '../validation/car-year.validator.js';

export class CarSaveDto {
  @Length(2, 20)
  @Matches(/^[A-Za-z\- ]+$/, {
    message:
      'Brand should contain only capital and small letters, spaces and dashes',
  })
  brand: string;

  @Length(1, 30)
  @Matches(/^[A-Za-z\- ]+$/, {
    message:
      'Model should contain only capital and small letters, spaces and dashes',
  })
  model: string;


  @Validate(CarYearValidator, {
    message: "Car year should be between 1900 and current year"
  })
  year: number


  @Matches(/^[A-Z\d]{17}$/, {
    message:
      'VIN code length 17 symbols and should contain only capital letters and digits',
  })
  vin: string;

  @Length(1, 30)
  @Matches(/^[A-Za-z\- ]+$/, {
    message:
      'Color should contain only capital and small letters, spaces and dashes',
  })
  color: string;
}


