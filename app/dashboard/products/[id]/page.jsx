import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}> 
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill />
            </div>
            Iphone 15
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" name="title" placeholder='Iphone 15' />
            <label>Price</label>
            <input type="number" name="price" placeholder='74999' />
            <label>Stock</label>
            <input type="number" name="stock" placeholder='25' />
            <label>Color</label>
            <input type="text" name="color" placeholder='Blue' />
            <label>Size</label>
            <textarea type="number" name="size" placeholder='6.1' />
            <label>Category</label>
                <select name="cat" id="cat">
                    <option value="kitchen">Kitchen</option>
                    <option value="computer">Computers</option>
                </select>
            <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder='Description'></textarea>
                <button >Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage