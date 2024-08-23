import db from "../koneksi.js";

export const getOrder = (req,res) => {
    const sql = "SELECT * FROM produk";
    db.query(sql, (error, result) => {        
        res.send(result)
    })
}

export const getOrderById = (req,res) => {
    const id = req.query.id
    const sql = `SELECT * FROM produk WHERE id = ${id}`
    db.query(sql, (error, result) => {
        if(error){
            req.statusCode(400)
            res.send(error)
        }
        res.status(201)
        res.json(result)
    })
}

export const postOrder = (req,res) => {
    const {nama_barang, jumlah, alamat_pengiriman, nama_pemesan} = req.body
    const sql = `INSERT INTO produk (nama_barang, jumlah, alamat_pengiriman, nama_pemesan) VALUES (?,?,?,?)`
    db.query(sql, [nama_barang, jumlah, alamat_pengiriman, nama_pemesan], (error,result) => {
        if(error){
            req.statusCode(400)
            res.send(error)
        }
        res.status(201)
        res.json(result)
    })
}

export const putOrder = (req, res) => {
    const id = req.query.id;
    const {nama_barang, jumlah, alamat_pengiriman, nama_pemesan} = req.body;
    if(id || nama_barang || jumlah || alamat_pengiriman || nama_pemesan){
        const query = `UPDATE produk SET nama_barang = "${nama_barang}", jumlah = "${jumlah}", alamat_pengiriman = "${alamat_pengiriman}", nama_pemesan = "${nama_pemesan}" WHERE id = ${id}`;
        db.query(query, (error, result) => {
            if(error) res.status(400).send(error.message);

            res.json(result)
        })
    }else{
        res.send("Isi Body")
    }
}

export const deleterOrder = (req, res) => {
    const id = req.query.id;
    const sql = "DELETE FROM produk WHERE id = ?"
    db.query(sql, [id], (error, result) => {
        if(error){
            req.statusCode(400)
            res.send(error)
        }
        res.status(201)
        res.json("data berhasil terhapus")
    })
}