# Test de selecció

Sentencies SQL:
1- Obtindre els primers 15 clients ordenats pel camp idClient de forma ascendent:

```js
SELECT * FROM Clients ORDER BY idClient ASC LIMIT 15;
```

2- Obtindre la suma de la baseImponible, i quàntes factures té el client amb CIF A7789118:

```js
SELECT SUM(baseImponible), COUNT(\*)
FROM Factures
WHERE cifClient = 'A7789118';
```

3- Obtindre totes les factures en les que apareix eel Producte amb idProducte = 35:

```js
SELECT \*
FROM Factures
WHERE idProducte = 35;
```

4- Eliminar totes les Factures dels clients amb CIF que comenci amb ‘C’ i que tinguin una baseImponible més gran de 1000€:

```js
DELETE FROM Factures
WHERE cifClient LIKE 'C%' AND baseImponible > 1000;
```

5- Actualitzar l’estatPagament de totes les Factures a l’estat ‘Pagat’ de totes les factures en les que apareguin Productes amb un preuVenda > preuCost:

```js
UPDATE Factures
SET estatPagament = 'Pagat'
WHERE idProducte IN (SELECT idProducte FROM Productes WHERE preuVenda > preuCost);
```
