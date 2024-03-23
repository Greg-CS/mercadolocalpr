import { supabase } from '../../../../utils/supabase';

export default async function GET(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any[]): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
try {
    const { data, error } = await supabase.from('posts').select('*');

    if (error) {
    throw error;
    }

    res.status(200).json(data);
} catch (error) {
    console.error('Error fetching posts:', error);
}
}
