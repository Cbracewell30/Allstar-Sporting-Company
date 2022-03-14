INSERT INTO store (store_name, store_location)
VALUES
  ('Drake', 'Denver_Co'),
  ('Heroes', 'San_Fran_CA'),
  ('Gurus', 'New york_New york');

INSERT INTO product (price, stock, store_id)
VALUES
  ( 15,250,3 ),
  (6, 150, 1),
  (25, 25, 2),
  (45,85, 1),
  (98, 103, 2),
  (47, 3, 3);

  INSERT INTO user (first_name, last_name, email, store_id )
VALUES
  ('James', 'Fraser', 'jf@goldenbough.edu',1),
  ('Jack', 'London', 'jlondon@ualaska.edu',2),
  ('Robert', 'Bruce', 'rbruce@scotland.net',3),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com',3),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net',2),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com',1),
  ('Heathcote', 'Williams', 'hwilliams@bafta.com',2),
  ('Sandy', 'Powell', 'spowell@oscars.com',3),
  ('Emil', 'Zola', 'ezola@requin.com',1),
  ('Sissy', 'Coalpits', 'scoalpits@greenaway.com',3),
  ('Antoinette', 'Capet', 'acapet@dontloseyourhead.com',2);
  
  INSERT INTO rating (product_id, store_id)
VALUES
(1,3),
(1,2),
(1,2),
(2,1),
(3,3),
(3,2),
(3,1);