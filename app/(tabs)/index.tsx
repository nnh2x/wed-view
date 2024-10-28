import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const wed = 'http://10.86.6.44:4200/gift-list/?accessToken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyNkJCRDM2MzMzREI0OTk3REZDOTE5M0YyODhBM0U0QzExNEM0MUMiLCJ4NXQiOiJnbXU5TmpNOXRKbDlfSkdUOG9pajVNRVV4QnciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiIzYTExZjM2Yy1lNWQ0LTk4ZDItMWE3ZS00YmE2YzRmMTQ1ZTgiLCJ1c2VyX2lkIjoiNzU3NSIsImltZWkiOiIyQ0E3OTcxQy0wMUY5LTU1QjYtQTQ4My01MEE0NEFCREZFQTAiLCJ0ZW5hbnRpZCI6IjNhMTE5NTQ3LWI1YjktZTA3Zi00NTM1LTcyZWUxMDBlZWRkNyIsInVuaXF1ZV9uYW1lIjoiMDM3NjgzMTY1OCIsImVkaXRpb25pZCI6IjNhMTE5NTQyLTQ4ZDItYTkwOS01MmIyLTE2MjA2NGU0YTI4OCIsInByZWZlcnJlZF91c2VybmFtZSI6IjAzNzY4MzE2NTgiLCJyb2xlIjoiTW9iaWxlQXBwIiwiZW1haWwiOiIwMzc2ODMxNjU4QGJvbmJvbnNob3Audm4iLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJvaV9wcnN0IjoiQkJTTW9iaWxlQXBwU2VydmljZV9Nb2JpbGUiLCJvaV9hdV9pZCI6IjNhMTU5YzQ5LWY2NTctMGJjZC1kNjI3LTE1ZjJjZTVkMmE5YiIsImNsaWVudF9pZCI6IkJCU01vYmlsZUFwcFNlcnZpY2VfTW9iaWxlIiwib2lfdGtuX2lkIjoiM2ExNTljNDktZjczZC1iOTg4LTIxMjItZjU0ZGFhN2QyM2Y5IiwiYXVkIjoiQm9uYm9uU2hvcCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgQm9uYm9uU2hvcCBvZmZsaW5lX2FjY2VzcyIsImp0aSI6IjljM2MzMzM2LTE3M2YtNGFmYS04ZmMyLWM4ODkxZjBiMDdjNSIsImlzcyI6Imh0dHBzOi8vYXV0aC1tb2JpbGUucWMuYm9uYm9uc2hvcC52bi8iLCJleHAiOjE3MzE1MjM3NjAsImlhdCI6MTcyODg5NDAxN30.NA11lPWv7VP2ZeEsYecEvaSDddy3xgNONG0VlE1fuqTUQKkKfPwLNG5twjzGJ0j4cQsuVTZ_gOZGPVtXpqIzGi_hBFKZvB1gcYp7Q2z7w22d3mi-8gMw6zShKJhvC2-X9GU0vxBxW6WaS1j6t6JBqvHU42TbMW8lwqt5BE4XvjyKlfDzT9vLlJBGVJwpFUL397zCRBTsGasUK2HgsR7oRncHflicsVCjmSKwKWBQTTH0RhFkFKJxnyBvnosVjKWyy4TafUsWDYYkJTRuZeHRRLhMHzwVpSrANfR7G_bloarpkkP_DDONL_rrF7K0d4ev4W1HjnsWvw1UxaJRveTE0Q'

const INJECTED_JAVASCRIPT = `(function() {
  window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
})();`;

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: wed }}
      
    /> 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Change to your preferred background color
    },  
    title: {
        fontSize: 24, // Change to your preferred font size
        fontWeight: 'bold', // Change to your preferred font weight
    },
});
