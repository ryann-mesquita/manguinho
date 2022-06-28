import { SignUpController } from '../../presentation/controllers/signup/signup';
import { EmailValidatorAdapter, EmailValidatorAdapter } from '../../utils/email-validator-adapter';
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter, BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository, AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';

export const makeSingUpController = (): SignUpController => {
  const salt = 12;
  const emailValidatorAdapter = new EmailValidatorAdapter();
  const bcryptAdapter = new BcryptAdapter(salt);
  const accountMongoRepository = new AccountMongoRepository();
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository);
  return new SignUpController(emailValidatorAdapter, dbAddAccount);
};
