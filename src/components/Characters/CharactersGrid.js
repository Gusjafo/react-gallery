import React from 'react';
import CharactersItem from './CharactersItem';
import Spinner from '../ui/Spinner';

const CharactersGrid = ({ items, isLoading }) => {
    return isLoading ?
        (<Spinner />) :
        (<section className="cards">
            {items.map((item) => (
                <CharactersItem key={item.char_id} item={item} />
            ))}
        </section>)
}

export default CharactersGrid
