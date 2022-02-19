import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'xmobhjk4',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skmFKyD4SGvMkVykE9v8MuEemw7ooMYeIxedcL4OL9sDzCJiBodbSPIAKJNHdsnyR1zA80TrL5arOnJyh9UlTEmNNjfTuoqG8BBBgrPOA9susUIS92okwPygZND7EGCkLUCA7Y4hB59HwU37WAPvCv5cr8WzXCn2vUW1VU7my8KYqw9LqnHW',
    useCdn: false,
})