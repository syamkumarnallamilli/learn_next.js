'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function OrderButton() {
  const queryClient = useQueryClient(); // get access to cache

  const orderFood = async (itemName: string) => {
    const response = await axios.post('/api/order', { item: itemName });
    return response.data;
  };

  const {mutate,isPending} = useMutation({
    mutationFn: orderFood,
    onSuccess: () => {
        alert(
'order placed successfully! Your pizza will be delivered soon.'  
        )
        
      // ✅ After order placed, refresh user's order list
      queryClient.invalidateQueries({ queryKey: ['my-orders'] });
    }
  });

  return (
    <button
      className="px-4 py-2 bg-green-500 text-white"
      onClick={( ) => mutate('Pizza')}>
      {isPending ? 'Order Pizza 🍕' : "ordering" }
    </button>
  );
}

