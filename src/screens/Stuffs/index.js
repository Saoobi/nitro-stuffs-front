import React, { useState, useContext, useEffect } from 'react';

import BackButton from '../../components/BackButton';
import FilterList from '../../components/FiltersList';
import StuffList from '../../components/StuffList';

import API from '../../API';
import { StateContext } from '../../Context';

function Stuffs({ match }) {
  const { currentGame } = useContext(StateContext);

  const [activeFilters, setActiveFilters] = useState(['smoke']);
  const [activeStuffs, setActiveStuffs] = useState([]);

  useEffect(() => {
    getStuffs();
  }, [activeFilters]);

  if (currentGame === 'valorant') return <p>Valorant coming soon...</p>;

  function getStuffs() {
    const { map } = match.params;
    const activeStuffs = API[currentGame].getStuffListByMapKey(
      map,
      activeFilters
    );

    setActiveStuffs(activeStuffs);
  }

  function handleFilterClick(filter) {
    let newFilters = [];

    if (!activeFilters.includes(filter.type)) {
      // Si ya pas le type dans le tableau on l'ajoute
      newFilters = [...activeFilters, filter.type];
    } else {
      // Sinon on lui nique sa race du tableau
      newFilters = activeFilters.filter((d) => d !== filter.type);
    }

    setActiveFilters(newFilters);
  }

  return (
    <div className='Stuffs'>
      <BackButton />
      <StuffList activeStuffs={activeStuffs} />
      <FilterList
        activeFilters={activeFilters}
        handleFilterClick={handleFilterClick}
      />
    </div>
  );
}

export default Stuffs;
