const Database = require('./db');
const saveOrphanage = require ('./saveOrphanage')


await saveOrphanage(db, )
Database.then(async db => {
    // inserir dados na tabela 
 

   /* // consultar dados na tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)
   // consultar somente 1 orphanato, pelo id 
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
   console.log(orphanage)*/
   await db.run("DELETE * FROM orphanages")
})

//DELETAR DADO DA TABELA 

