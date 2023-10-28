import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex h-[10000px] items-center justify-center rounded-xl border-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illo
        repellendus dicta deleniti voluptatem ad quas totam, aspernatur quaerat,
        assumenda unde vel enim autem temporibus mollitia ut tempora commodi
        error vitae eos quasi quod nam at. Dolorum modi sint reiciendis ea
        aspernatur quidem at voluptatem ipsum incidunt sequi, perferendis ipsam
        non deleniti nihil officia, vitae excepturi. In modi tempore at eum
        fugiat, error alias libero perspiciatis voluptatum totam quod quaerat
        ipsam reprehenderit praesentium assumenda itaque harum ex quas nisi.
        Repellendus, assumenda. Molestias, sint cumque neque illo recusandae
        deserunt aut adipisci? Voluptatum quo necessitatibus ipsam adipisci
        voluptas dolorum aspernatur consequuntur fugiat amet numquam, error
        fugit impedit eum distinctio temporibus ex facilis natus praesentium,
        aliquam libero corporis incidunt soluta suscipit? Dicta, voluptates
        saepe est rerum sed ipsam doloremque reiciendis architecto quaerat amet
        quae nobis, unde inventore ipsum consectetur laborum. Aliquam eaque
        voluptatem id. Exercitationem reprehenderit repellendus quos fuga ex.
        Voluptatem voluptates ut et facilis impedit voluptatibus sint eum
        eligendi eos, corrupti nobis rerum necessitatibus sed itaque nostrum,
        porro excepturi mollitia dolores ipsam ex consequuntur ipsa. Dicta earum
        porro accusantium ab exercitationem dolorem reprehenderit, omnis minima
        possimus saepe, facere rerum quas commodi? Reprehenderit quos cum
        veritatis dolor. Aperiam nam non ullam molestias dolore consectetur
        repudiandae, pariatur doloribus fuga incidunt sint doloremque sequi,
        cumque saepe nobis iure adipisci perspiciatis reprehenderit autem cum
        accusantium quis sunt quaerat facilis. Sed quis voluptate dolorem ullam
        autem fugiat eligendi molestias mollitia, pariatur veniam aliquid
        accusamus minus qui similique cum est, quos beatae neque fugit. Earum
        neque nihil eos aperiam, natus tenetur, nulla velit explicabo sit totam
        eligendi qui iure reprehenderit cum autem rerum maxime nam amet
        consequuntur voluptatem officia itaque laborum? Officia quasi ducimus
        nam ratione, nobis nisi explicabo rem corrupti! Voluptatem sunt aut
        repellendus amet sit deserunt, voluptates minus natus, repellat corporis
        rem ducimus odio commodi enim quos, deleniti nobis adipisci eos
        voluptatibus ratione! Consectetur doloremque aliquid amet laboriosam
        iste soluta enim, ipsam aperiam sunt quae repellat, nam neque deleniti
        eum inventore expedita ipsum repudiandae culpa optio cumque! Earum a
        nesciunt eaque expedita doloribus excepturi odio sit ducimus maiores
        voluptas blanditiis facilis adipisci fugiat magni id pariatur dicta
        incidunt fuga quo quisquam delectus, iste error dolorum. Aliquid unde ab
        iure nihil quam quaerat non veritatis eius odio natus! Necessitatibus,
        ipsam libero? Impedit officia nisi recusandae mollitia ipsum dicta
        officiis deleniti, excepturi consectetur illum eius est inventore
        repellendus ab ipsa eveniet nesciunt dolores quaerat quasi minima sed
        tempore, doloribus ullam! Rerum, voluptatem enim quibusdam suscipit
        excepturi voluptas, autem quas reprehenderit, deleniti assumenda porro
        amet cupiditate blanditiis ab dignissimos facere vero? Sapiente eius
        iusto modi voluptates molestiae quia officiis, repudiandae minima odio
        quaerat labore, reiciendis reprehenderit aliquam ipsum! Explicabo
        impedit nulla, consectetur minima eveniet id necessitatibus autem
        repudiandae quam repellat dolore deserunt cumque veniam doloremque
        eligendi maxime corrupti voluptatibus commodi aliquid soluta blanditiis
        repellendus animi numquam? Facilis atque veritatis eaque quod mollitia
        ducimus quia veniam dicta itaque labore eius, est distinctio
        perspiciatis maiores sunt doloribus eos accusantium laudantium facere
        nisi quibusdam asperiores soluta beatae velit. Eveniet minus laborum
        neque non, provident mollitia temporibus earum, quo voluptatibus ipsa
        distinctio voluptatum omnis, quis esse. Excepturi vel sed iste beatae et
        hic, odit rerum. Quasi modi nesciunt ab debitis aperiam. Voluptatum
        sint, possimus ab ratione veritatis aut corrupti nulla corporis
        laboriosam nam sequi adipisci praesentium, sed autem. Fuga explicabo
        cumque praesentium accusantium non at temporibus amet vitae earum quo
        neque necessitatibus reprehenderit dolor et officiis, aliquam fugiat.
        Esse magni error porro ullam, quae recusandae fugit, dolorum harum
        adipisci, maiores amet nihil? Aliquam labore tempora possimus
        consequuntur similique facilis vero fuga, impedit perferendis veritatis
        explicabo repellendus corporis porro placeat nemo quaerat nihil dolores
        culpa voluptatibus eum quos necessitatibus! Perferendis eum laboriosam
        laudantium itaque quas temporibus soluta magni ut dolores aut? Delectus
        exercitationem itaque expedita, nesciunt facilis ut molestiae corporis
        asperiores. Delectus asperiores quisquam fugiat officiis totam odio
        rerum recusandae sunt quo repellendus corrupti itaque dolore aliquid
        earum, impedit laudantium error molestiae dolores porro eaque quibusdam
        hic soluta fuga a. Quibusdam iste recusandae in possimus voluptatem,
        iusto nulla expedita architecto, rem velit tempore temporibus molestias
        enim dolorem quia quas aperiam deleniti a. Nihil sit labore culpa
        architecto, temporibus magni at aperiam enim dolore cum! Magni, quod
        delectus ut mollitia rerum at quae et corrupti suscipit quasi
        necessitatibus libero! Adipisci, maxime dolore! Aspernatur recusandae
        praesentium odit ex at veritatis molestiae iure officiis fugiat est
        autem ipsa quisquam eum vero aliquam, excepturi, atque ullam consectetur
        exercitationem nihil asperiores quas. Harum minus commodi praesentium
        rerum ratione? Expedita fugiat, libero modi magni pariatur ratione
        earum, molestiae, aut ipsam optio neque vitae aliquid odio porro ut
        quibusdam nemo repudiandae. Quisquam ipsam dignissimos similique
        repellat, ad ex doloremque? Rem ipsam nostrum modi inventore, fuga
        veritatis incidunt eaque voluptas culpa omnis? Nam neque et at nobis
        similique, saepe qui. Enim veritatis nesciunt dignissimos fugiat ullam
        quod vero impedit saepe, aliquam consequuntur eius est? Totam sit harum
        earum quisquam repudiandae, velit vero dolorem, nulla veritatis non quos
        blanditiis odit eligendi laudantium aliquid dicta dolore maxime
        molestias magni nam illum nobis placeat. Eius voluptas rerum amet
        quisquam quod tempora laboriosam, obcaecati dolores perferendis eveniet
        cumque esse totam facere consequatur debitis aut alias magni commodi
        odit soluta? Veritatis impedit aut corporis laborum itaque tempore
        nihil, perspiciatis, obcaecati at repellendus quos possimus enim eos,
        optio illum voluptatum tempora nemo molestias maxime neque consequuntur
        asperiores eaque. Deleniti consequuntur perferendis distinctio deserunt
        molestiae alias neque libero! Explicabo perferendis ratione iure
        voluptas excepturi animi. Officiis excepturi facere temporibus iure
        mollitia autem nam molestiae atque quae omnis adipisci reiciendis,
        delectus, dolorum aut hic assumenda architecto voluptatem. Vel maxime
        natus aperiam, tenetur dignissimos, sed possimus minus reprehenderit
        magni beatae expedita iure dolores mollitia illo atque! Dignissimos,
        asperiores? Odio sint atque in? Nostrum beatae numquam at voluptatum
        minus repellendus error laudantium odit accusamus saepe tempora fugiat
        ad animi similique qui libero sunt hic, assumenda dolor dolorem,
        voluptates architecto tempore iste ab? Cupiditate numquam, laboriosam
        dolor quas provident vel. Eius temporibus incidunt, reiciendis quo
        fugiat et omnis culpa fugit vitae perferendis commodi quam voluptatem
        tempora enim eveniet molestiae, doloremque suscipit, hic laboriosam!
      </div>
    </div>
  );
}
