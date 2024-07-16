import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import CategoryForm from '../../components/Form/CategoryForm'
import { Modal } from 'antd'

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("")

    //handle form 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/api/v1/category/create-category", {
                name,
            })

            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
                setName('');//clears the input field when any product is created 
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            console.log(error)
            toast.error('Something went wrong in input from ')
        }
    }

    //get all categories 
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data?.category);
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Something went wrong in getting category ")
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    //updated category
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`/api/v1/category/update-category/${selected._id}`, { name: updatedName })
            if (data.success) {
                toast.success(`${updatedName} is Updated`)
                setSelected(null)
                setUpdatedName("")
                setVisible(false)
                getAllCategory();
                setName('');
            }
            else {
                toast.error(data.message)
            }

        }
        catch (error) {
            toast.error('Something Went wrong ')
        }
    }

    //delete Category
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`)
            if (data.success) {
                toast.success(`category is deleted`)
                getAllCategory();
                setName('');
            }
            else {
                toast.error(data.message)
            }

        }
        catch (error) {
            toast.error('Something Went wrong ')
        }
    }


    return (

        <Layout title={"Dashboard - Create Category"}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mx-lg-4">
                        <AdminMenu />
                    </div>
                    <div className="col-lg-7 col-md-8">
                        <h1 className='mx-4 mx-lg-0 mt-3 mt-lg-0'>Manage Category</h1>
                        <div className='p-3 mx-3 mx-lg-0'>
                            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className='p-3'>
                            <div className='table-responsive'> {/* Added responsive wrapper for the table */}
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Home</th>
                                            <th scope='col'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories?.map((c) => (
                                            <tr key={c._id}>
                                                <td>{c.name}</td>
                                                <td>
                                                    <button className='btn btn-primary ms-3' onClick={() => {
                                                        setVisible(true);
                                                        setUpdatedName(c.name);
                                                        setSelected(c);
                                                    }}>Edit</button>
                                                    <button className='btn btn-danger ms-3' onClick={() => { handleDelete(c._id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
                            <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default CreateCategory
