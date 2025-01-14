import { Card, CardContent } from "@/components/ui/card";

interface PreviewPanelProps {
  code: string;
}

export function PreviewPanel({ code }: PreviewPanelProps) {
  // const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(code);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  const getSnackUrl = () => {
    const encodedCode = code
      ? encodeURIComponent(code)
      : encodeURIComponent(`import { Text, SafeAreaView, StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to Expo React native AI
      </Text>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
`);
    return `https://snack.expo.dev/?platform=web&code=${encodedCode}`;
  };

  return (
    <Card className="flex flex-col gap-2 lg:col-span-2">
      {/* <CardHeader className="flex flex-col gap-2 xl:flex-row items-center justify-between">
        <CardTitle>React Native Code</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4 mr-2" />
            {copied ? "Copied!" : "Copy Code"}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={getSnackUrl()} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in Expo Snack
            </a>
          </Button>
        </div>
      </CardHeader> */}
      <CardContent className="flex overflow-hidden w-full h-full">
        {/* <code className="text-sm">{code}</code> */}
        <iframe src={getSnackUrl()} title="code" className="w-full h-full" />
      </CardContent>
    </Card>
  );
}
