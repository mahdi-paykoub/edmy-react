import React, {useEffect, useState} from 'react'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";


export default function PanelNewsletter() {
    const [emails, setEmails] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    useEffect(() => {
        fetch(`${baseUrl}/newsletters`)
            .then(res => res.json())
            .then(res => {
                setEmails(res)
            })
    }, [])
    return (
        <>
            <DataBox title='اعضای خبرنامه'>
                {emails.length === 0 ?
                    <ErrorBox text='عضوی یافت نشد'/> :
                    <Table className='box-child-table' hover>
                        <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>ایمیل</th>
                        </tr>
                        </thead>
                        <tbody>

                        {emails.map((email, index) =>
                            <tr key={email._id}>
                                <td>{index + 1}</td>
                                <td>{email.email}</td>
                            </tr>)
                        }
                        </tbody>
                    </Table>
                }
            </DataBox>
        </>
    )
}
