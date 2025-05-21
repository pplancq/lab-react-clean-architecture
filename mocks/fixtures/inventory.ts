import { Inventory } from '@Front/inventory/domain/model/inventory';

export const mockInventory: Inventory[] = [
  new Inventory('1', 'Star Wars', 'George Lucas', 1977),
  new Inventory('2', 'Inception', 'Christopher Nolan', 2010),
  new Inventory('3', 'Matrix', 'The Wachowskis', 1999),
  new Inventory('4', 'Star Trek', 'J.J. Abrams', 2009),
  new Inventory('5', 'Iron Man', 'Jon Favreau', 2008),
  new Inventory('6', 'Avengers', 'Joss Whedon', 2012),
  new Inventory('7', 'Casino Royale', 'Martin Campbell', 2006),
];
