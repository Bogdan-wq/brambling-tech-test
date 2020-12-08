import React, {useMemo, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MDBBox} from "mdbreact";

import SearchInput from "./components/SearchInput/SearchInput";
import Loading from "./components/Loading/Loading";
import NoItems from "./components/NoItems";
import MediaItem from "./components/MediaItem";
import Error from "./components/Error";

import renderIf from "./helpers/renderIf";

import {getMedia,changeInputValue,reset} from "./reducer/actions";


function App() {

    const dispatch = useDispatch();
    const timeout = useRef();

    const loading = useSelector(s => s.loading);
    const error = useSelector(s => s.error);
    const mediaData = useSelector(s => s.data);
    const inputValue = useSelector(s => s.inputValue)

    const loadingIndicator = renderIf(loading)(() => <Loading />)
    const errorIndicator = renderIf(error)(() => <Error />)
    const noItemsIndicator = renderIf(mediaData && mediaData.length === 0)(() => <NoItems />)
    const media = useMemo(() => renderIf(mediaData)(() => {
        return (
            <MDBBox className="mt-4">
                {mediaData.map((mediaItem) => {
                    return <MediaItem key={Math.random()}
                                      inputValue={inputValue}
                                      {...mediaItem} />
                })}
            </MDBBox>
        )
    }),[mediaData])


    return (
      <MDBBox display="flex"
              justifyContent="center"
              alignItems="center"
              flex="column"
              className="pt-4">
          <MDBBox className="w-50">
              <SearchInput
                  onChange={e => {
                      dispatch(changeInputValue(e.target.value))
                      if(timeout.current) {
                          clearTimeout(timeout.current)
                      }
                      timeout.current = setTimeout(() => {
                          dispatch(getMedia(e.target.value))
                      },600)
                  }}
                  onReset={() => dispatch(reset)}
                  value={inputValue}/>
              {loadingIndicator}
              {noItemsIndicator}
              {errorIndicator}
              {media}
          </MDBBox>
      </MDBBox>
  );
}

export default App;
