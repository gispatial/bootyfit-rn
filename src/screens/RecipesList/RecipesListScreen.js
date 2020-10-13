import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://gharxy.digital/stage/bootyfit/listings/?keyword_search=fitness&location_search=&tax-listing_category=&action=listeo_get_listings' }} style={{ marginTop: 0 }} />;
  }
}
