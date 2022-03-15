INSERT INTO store (store_name, store_location, fkproduct_id)
VALUES
  ('Drake', 'Denver_Co', 1),
  ('Heroes', 'San_Fran_CA', 2),
  ('Gurus', 'New york_New york', 3);

INSERT INTO product (price, stock, store_id)
VALUES
  ( 15,250,3 ),
  (6, 150, 1),
  (25, 25, 2),
  (45,85, 1),
  (98, 103, 2),
  (47, 3, 3);

  INSERT INTO user (first_name, last_name, email, fkstore_id, password )
VALUES
  ('James', 'Fraser', 'jf@goldenbough.edu',1, "baibfia"),
  ('Jack', 'London', 'jlondon@ualaska.edu',2,"baibfia"),
  ('Robert', 'Bruce', 'rbruce@scotland.net',3,"baibfia"),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com',3,"baibfia"),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net',2,"baibfia"),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com',1),
  ('Heathcote', 'Williams', 'hwilliams@bafta.com',2,"baibfia"),
  ('Sandy', 'Powell', 'spowell@oscars.com',3,"baibfia"),
  ('Emil', 'Zola', 'ezola@requin.com',1,"baibfia"),
  ('Sissy', 'Coalpits', 'scoalpits@greenaway.com',3,"baibfia"),
  ('Antoinette', 'Capet', 'acapet@dontloseyourhead.com',2,"baibfia");
  
  