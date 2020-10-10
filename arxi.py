import urllib.request as libreq
with libreq.urlopen('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=5') as url:
  r = url.read()
# print()
f = open("demofile3.xml", "w")
# print( )
f.write(r.decode("utf-8"))
f.close()
