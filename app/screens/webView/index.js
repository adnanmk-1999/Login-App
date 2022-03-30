import React, {useState, useContext} from 'react';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';
import {AuthContext} from '../../authentication/authProvider';

function Webview() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  const {URL, setURL} = useContext(AuthContext);

  const javascript = `window.alert('Welcome to amazon')`;

  const onNavigationStateChange = webViewState => {
    console.log(webViewState.url);
    setURL(webViewState.url);
  };

  return (
    <>
      {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color="orange"
        />
      ) : null}

      <WebView
        source={{uri: 'https://www.ust.com/'}}
        //   onError={event =>
        //     alert(`Webview Error ${event.nativeEvent.description}`)
        //   }
        //   injectedJavaScriptBeforeContentLoaded={javascript}
        onLoadProgress={event => setProgress(event.nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
        onNavigationStateChange={onNavigationStateChange}
      />
    </>
  );
}

export default Webview;
