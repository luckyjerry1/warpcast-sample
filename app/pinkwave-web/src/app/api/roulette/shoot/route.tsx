import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';
import { getFrameHtmlResponse } from '../../../../utils/getFrameHtmlResponse';

async function getResponse(): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: '🎯 Try Your Luck!',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/shoot`
        },
        {
          label: '🎲 Show Result',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/stop`
        }
      ],
      image: {
        aspectRatio: '1:1',
        src: `${NEXT_PUBLIC_URL}/roulette/hey.png`,
      },
    }),
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';