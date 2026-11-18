import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PolicySaveDto } from '../dto/policy.save-dto.js';

@ValidatorConstraint({
  name: 'isValidDates',
})
export class DatesValidator implements ValidatorConstraintInterface {
  validate(issuedAt: Date, args: ValidationArguments): boolean {
    const dto: PolicySaveDto = args.object as PolicySaveDto;

    if(!issuedAt || issuedAt.getTime() < Date.now()){
      return false
    }

    const  expiresAt: Date = dto.expiresAt;
    if(!expiresAt || expiresAt.getFullYear() - new Date().getFullYear() > 5){
      return false
    }

    return expiresAt.getTime() > issuedAt.getTime()
  }
}

