INSERT INTO store (store_name, store_location, fkproduct_id)
VALUES
  ('Drake', 'Denver_Co', 1),
  ('Heroes', 'San_Fran_CA', 2),
  ('Gurus', 'New york_New york', 3);

INSERT INTO product (name, price, stock, store_id)
VALUES
  ('baseball bat', 15,250,3 ),
  ('soccer ball', 6, 150, 1),
  ('soccer net', 25, 25, 2),
  ('baseball glove', 45,85, 1),
  ('baseball helmet', 98, 103, 2),
  ('knee pads', 47, 3, 3);

  INSERT INTO user (first_name, last_name, email, store_id, password )
VALUES
  ('James', 'Fraser', 'jf@goldenbough.edu',1, '10jewdhwqhd'),
  ('Jack', 'London', 'jlondon@ualaska.edu',2, 'j1d29bueijfnj'),
  ('Robert', 'Bruce', 'rbruce@scotland.net',3, 'qkevd1gdui1n'),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com',3, 'jyadhgcyd'),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net',2, 'o87g32dyeiwhuef'),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com',1, 'password1234'),
  ('Heathcote', 'Williams', 'hwilliams@bafta.com',2, 'opennow'),
  ('Sandy', 'Powell', 'spowell@oscars.com',3, 'fhuwehsdfiukls'),
  ('Emil', 'Zola', 'ezola@requin.com',1, '3827tgdcdsc'),
  ('Sissy', 'Coalpits', 'scoalpits@greenaway.com',3, '729gdeuidsc'),
  ('Antoinette', 'Capet', 'acapet@dontloseyourhead.com',2, '787egd28gddkk');
  
  INSERT INTO rating (product_id, store_id, value)
VALUES
(1,3, 'good'),
(1,2, 'very good'),
(1,2, 'average'),
(2,1, 'good'),
(3,3, 'very good'),
(3,2, 'average'),
(3,1, 'not bad');
