import { InsuranceType } from '../enums/insurance-type.enum.js';
import { Min, Validate } from 'class-validator';
import { CoverageValidator } from '../validation/coverage.validator.js';
import { DatesValidator } from '../validation/dates.validator.js';

export class PolicySaveDto {
  type: InsuranceType;

  @Min(1)
  holderId: number;

  @Min(1)
  agentId: number;

  @Validate(CoverageValidator, {
    message:
      'Coverage should be equal or greater than 1000 for liability, and 1500 - for casco',
  })
  coverage: number;

  @Validate(DatesValidator, {
    message:
      'Max insurance period is 5 years. Issue date should be later or equal than current date.' +
      'Expires date should not be earlier than issue date',
  })
  issuedAt: Date;

  expiresAt: Date;
}

