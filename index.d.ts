type Formatter = (boldText: string, regularText: string) => string;

declare const bionicReader: {
    (text: string, formatter: Formatter): string;
    html: Formatter;
    md: Formatter;
} 
export default bionicReader;