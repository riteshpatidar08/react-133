import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FiUpload, FiDownload, FiPlus } from 'react-icons/fi';

function Customers() {
  const [search, setSearch] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Alcides Antonio',
      email: 'alcides.antonio@devias.io',
      location: 'Madrid, Comunidad de Madrid, Spain',
      phone: '908-691-3242',
      date: 'Jun 27, 2025',
      avatar: 'AA',
    },
    {
      id: 2,
      name: 'Marcus Finn',
      email: 'marcus.finn@devias.io',
      location: 'Carson City, Nevada, USA',
      phone: '415-907-2647',
      date: 'Jun 27, 2025',
      avatar: 'MF',
    },
    {
      id: 3,
      name: 'Jie Yan',
      email: 'jie.yan.song@devias.io',
      location: 'North Canton, Ohio, USA',
      phone: '770-635-2682',
      date: 'Jun 27, 2025',
      avatar: 'JY',
    },
    {
      id: 4,
      name: 'Nasimiyu Danai',
      email: 'nasimiyu.danai@devias.io',
      location: 'Salt Lake City, Utah, USA',
      phone: '801-301-7894',
      date: 'Jun 27, 2025',
      avatar: 'ND',
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customers-page">

      {/* TOP */}
      <div className="customers-header">
        <div>
          <h1>Customers</h1>

          <div className="customer-actions">
            <button>
              <FiUpload />
              Import
            </button>

            <button>
              <FiDownload />
              Export
            </button>
          </div>
        </div>

        <button className="add-btn">
          <FiPlus />
          Add
        </button>
      </div>

      {/* SEARCH */}
      <div className="customer-search-box">
        <CiSearch />
        <input
          type="text"
          placeholder="Search customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="customer-table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Signed Up</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  <Link
                    to={`/dashboard/customers/${customer.id}`}
                    className="customer-name"
                  >
                    <div className="avatar">
                      {customer.avatar}
                    </div>

                    {customer.name}
                  </Link>
                </td>

                <td>{customer.email}</td>
                <td>{customer.location}</td>
                <td>{customer.phone}</td>
                <td>{customer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Customers;