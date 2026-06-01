export interface Album {
  id: number
  name: string
  year: number
  category: 'sai' | 'sid'
  coverUrl: string
}

export const ALBUMS: Album[] = [
  {
    id: 0,
    name: 'SID 2019',
    year: 2019,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/EP4h7TB_CBjbGr5oXuYbc9QgsmtqYQv2Ig5AOp1NxLk1vmeKE_ghnTANpcJsohjkp9V_3qASrGdnhpJDhxIUqCthQDVpvNe5267Q7WyA5v4-mlThHHI7PEBn8NVBq694wtNR87Q5sUk=w1920-h1080',
  },
  {
    id: 1,
    name: 'SAI 2018–19',
    year: 2018,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/3VSJxT4d8R20gRdZSsfuPVE9wuLqqAfgExMTRQOj7GpZkOzzmRHqCiNG5amOhyCGQqe0TlO9YIHvWO_lreJaduSGt5QtKBjxRvjnVLIa5Hbwsji-OsXRKE8VH44Pnrz-fGIdfs8qnEM=w1920-h1080',
  },
  {
    id: 2,
    name: 'SID 2018',
    year: 2018,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/CZ2X2_M12feoGP7aCtrpLWI0oAtvSLp61WuiNW5qIDmwoHvYsFhBt8ShwNYACclwJwj8BEXDx3nRB8ozQpOv6IqiznskMfX9JQ23JHq_xOHjvTQJIBxBFRgEIpqOKb666IiFNUGa0IwNwYTr-UNuMffUqde5zuRfXmj4x3_Y20suo3pSu1ihglJLkrjCpWnVITEJWD4QMJuM9-q7YcjAehyejRl3khtczVhvxEmamlD0gLzh3COUIGS1_rEUrXRyIXMXrr9k8hTSDyLzWW6y9JBJJzc3feiYgemDVTcazMcAyr4cSDDG3wXm6J7cISiNPGrgezGM94T2Pq9eDuUJ-8ExiWEPWJwjWpIfmR3tSh076CeHRfc5a35Ph3sVlOQeFaeexCximpCD4xIX0ezeXlDoGTAcVx9KfGBxZfOdHkDQPigds1gE8xWGbHbpZrIVhy-lFIGD9yRJA3Pta0KXNJxION-CqSc3F1HzQ2cuNwUj7lTfKFTZ5Mdh9lcLrwu69EUrvIPXVUpMmXLlmk66JX6LE6s52ZSgq6ZLBZnAlZpEGspNxvOqFLw3P2YLcw7NbTnTNmkPv_sSzYVt6r3IT3HQ5ytYB4wM1PSmz1cEXcwj-VKi2oO_PhqBfj9YZKnGiqcRQ_GkVk9Rl62XNqQcTxCMLtWU7Cs1JA=w720-h509-no',
  },
  {
    id: 3,
    name: 'SAI 2017–18',
    year: 2017,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/Ta3vcrcwckpVRZmBMQXPWXJhr3qJCef-c11u5YxauoPw25LwBEGh-28XXXKF3RHqzCpHRTt9DqCDflM4gqZJVp11hFfJ6mO2GGMrwBXibz_TZSownYmevUkUCfuBBlHa5pqK58gKZcA=w1920-h1080',
  },
  {
    id: 4,
    name: 'SID 2017',
    year: 2017,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/z54ww82b7w-1YX3EmeFqAuk6Xas4szDdrgDGqMtMCOjdtQn45pqBdSbQqhgxKugHe_lWcudmZLkh0kic_a1qpEdlqB6sv_n97vmFzAizwVu5k6ysojwaa_9-VUNF4lbhr_sltgB18B4=w1920-h1080',
  },
  {
    id: 5,
    name: 'SAI 2016–17',
    year: 2016,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/V3lmyRVXjypJtbTvIERhovq0AFI7_2vjXOzWP2AAPCVhsbVJrULeukGa2TWiG_ckgN3_ITIGfmaDQp8VxpHeAsVKWnCQim4y44JoSyaysJwrY16HvfGS-xJzw0Wxo3HHpDZc49YwKKw=w1920-h1080',
  },
  {
    id: 6,
    name: 'SID 2016',
    year: 2016,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/pkXZFg0uXPEkPqgbFeXO7pek0Hn6oASdRF3uZLRup7EHEZAXdEOcycOstFQ1YNB3HPSonFZ9hZlE53Ps5F6pn0UwpiVDXbNFy6dqNjZJtvmK479r6zphtUe4KLV7E_nkCiqp19CWuGo=w1920-h1080',
  },
  {
    id: 7,
    name: 'SAI 2015–16',
    year: 2015,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/FYCmJGNigpri1He_8cir77QS4NnuGskyDHPyGPe-Me6p7xMp9y3KC8HdzQwC1whM2x6IKt9vFLuf8lO4b2oji4s5LAUOyxAL-I1M5G9wUltpYBgPAr-sPLshKu5zY_OzSgrGBGLOp-s=w1920-h1080',
  },
  {
    id: 8,
    name: 'SID 2015',
    year: 2015,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/DmR3KbCWrowY5nlRnFhEe_4P-MAN4AMvkoGykl8vuLMefYIeH_7nI-eFeTyiQOCxSjU8SUJTT_ZgzIdP6x6_VOsQCY5i11Zdulyw3y1peHzoenLNEmkZCD18uMgc6WJBKirv1PZ7fNk=w1920-h1080',
  },
  {
    id: 9,
    name: 'SAI 2014–15',
    year: 2014,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/2xuZ8xgzLvsC0Oon7V-BpHtO0M_Bi5SIpVhDXsD87mPNmdW50T_7BCHsv0cuuQlFxpi-d0c0P01abvrU_iF43nHK9SHO4UPmfKJJ9zLOf65g-zxFR_YbV83SnYRd7zQIe1m5gGmw4EQ=w1920-h1080',
  },
  {
    id: 10,
    name: 'SID 2014',
    year: 2014,
    category: 'sid',
    coverUrl: 'https://lh3.googleusercontent.com/Jjp_6KO_372obP7aJRBCOGMQ-0iIMsG9g32NpU-E_Apm6K7pNQBsgYpbnC6zeoTs8YL9XsJC1LZ_uZNgw0wI-9JC4dCSWfh55ySlIYBQC8NExYY8Nx0PXtXlvd8crgUx3X2ZVWP9s-s=w1920-h1080',
  },
  {
    id: 11,
    name: 'SAI 2013–14',
    year: 2013,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/zBOX3seudse5LBqm2Md4EIgV4VFo6AmehMctKXvgrquiLCuInuSIecTybYKNqNNQQYdTeqOHQwMq5A48_lzBqEGYWVu6dcyHQXwLLei_VvPKpYgGW3fcOTFY11mqIaG1efmokrRCErtT-j-GK2EhHaPuWuFkpOWrurcGFNWOx-AAPL0A9MCaKlqiPfj7DG6hCsVm3p6iUypP9RpYb4HUxuPJzCIW-pFuIPGgNk1SIuZb3yEilJxDpk_hduAyiANNjLh9WenE7GoRzXZqFyRWvE0utgxxBnSRUK6Tk_H3fnQWjWlOPgtrlJF6l1RWvEFkhBG1wbJyveIjl0qYbQV5TTAZhZQa9iWeiJUPgloL78gc7a-TtQVx08DcVI39ZL6yebchwnBa65yISrve_Nt9sr_PdUSO9UO2p-tNsFaxq6K9pNSAT7ML7TbEf-fchwf5YAT4cvdz9QJ4EflICWvpiTZl7AIX3W3hWjxQDtzs0d1lzaI8RhEhDVQDmzQA-IsdBi-W3eDjTLLpWKhi4YdxZapOmF1dd0ovzWOPUL-NH183wPBys0N7Jmz75egAP7C0pqla4n7BhZl4x-_aYJsY1jIYhaMw1rtd0PQGAg6n7d1airR6V39ZblDk6tHaVk6ryUla7t76NnxKUC0IcMtBkdnK9K6UjkAgGQ=w1101-h708-no',
  },
  {
    id: 12,
    name: 'SAI 2011–12',
    year: 2011,
    category: 'sai',
    coverUrl: 'https://lh3.googleusercontent.com/VquTmAxowqlg2HAbnCOKUMJno8TpkdFqjfYZCjj_hGUA1LjlbSS5OiphpKitNmzD0nl4BbbbL2Rn4L1rI6bJltnfalo1Sfd4aIw0vaRVEKc1jNWddBs4Oelsmo9Duh57ZNLqSuamvP8=w1920-h1080',
  },
]
