package com.example.lngthnh.app;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;



public class RankingFragment extends Fragment {
    View myFragment;
    public static RankingFragment newInstance(){
        RankingFragment rankingFragment  = new RankingFragment();
        return rankingFragment;
    }

    //press ctrl O


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        myFragment =  inflater.inflate(R.layout.fragment_ranking,container,false);

        return myFragment;
    }
}