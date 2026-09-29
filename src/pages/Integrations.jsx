import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiUpload, FiDownload, FiPlus, FiClock } from 'react-icons/fi';

function Integrations() {
  const [search, setSearch] = useState('');

  const integrations = [
    {
      name: 'Dropbox',
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      installs: '594 installs',
      icon: '◆',
      iconClass: 'dropbox-icon',
    },
    {
      name: 'Medium Corporation',
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      installs: '625 installs',
      icon: 'M',
      iconClass: 'medium-icon',
    },
    {
      name: 'Slack',
      description:
        'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      installs: '857 installs',
      icon: '✣',
      iconClass: 'slack-icon',
    },
    {
      name: 'Lyft',
      description:
        'Lyft is a transportation service that connects passengers with drivers through a mobile application.',
      installs: '420 installs',
      icon: 'lyft',
      iconClass: 'lyft-icon',
    },
    {
      name: 'GitHub',
      description:
        'GitHub is a developer platform that allows developers to create, store and manage their code.',
      installs: '782 installs',
      icon: '●',
      iconClass: 'github-icon',
    },
    {
      name: 'Figma',
      description:
        'Figma is a collaborative interface design tool that allows teams to work together in real time.',
      installs: '531 installs',
      icon: '◆',
      iconClass: 'figma-icon',
    },
  ];

  const filteredIntegrations = integrations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="integrations-page">

      {/* HEADER */}
      <div className="integrations-header">
        <div>
          <h1>Integrations</h1>

          <div className="integration-actions">
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

        <button className="integration-add-btn">
          <FiPlus />
          Add
        </button>
      </div>

      {/* SEARCH */}
      <div className="integration-search-box">
        <CiSearch />

        <input
          type="text"
          placeholder="Search integration"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARDS */}
      <div className="integration-grid">
        {filteredIntegrations.map((integration) => (
          <div className="integration-card" key={integration.name}>

            <div className={`integration-icon ${integration.iconClass}`}>
              {integration.icon}
            </div>

            <h2>{integration.name}</h2>

            <p>{integration.description}</p>

            <div className="integration-footer">

              <span>
                <FiClock />
                Updated Jun 26, 2025
              </span>

              <span>
                <FiDownload />
                {integration.installs}
              </span>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Integrations;